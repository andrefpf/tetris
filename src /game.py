import pygame 
import sys

from tetromino import Tetromino

class Game():
    def __init__(self, screen):
        self.screen = screen
        self.FPS = 30
        self.block_size = 30
        self.rows = screen.get_height() // self.block_size
        self.columns = screen.get_width() // self.block_size
        self.in_game = True

        self.colors = [
            (150, 30,  200), #T 
            (100, 100, 200), #I
            (150, 200, 50 ), #O
            (30,  50,  150), #J
            (150, 100, 0  ), #L
            (10,  200, 100), #S
            (200, 100, 50 ), #Z
        ]

        self.fall_counter  = 0
        self.fall_time = self.FPS
        self.fall_slowly = True

        self.__clear_grid()
        self.__create_tetromino()
        self.__game_loop()
    
    def __clear_grid(self):
        self.grid = []

        for i in range(self.rows):
            row = [0] * self.columns
            self.grid.append(row)

    def __create_tetromino(self):
        self.tetromino = Tetromino(3, 0)
        if self.__check_contact():
            self.__init__(self.screen)

    def __game_loop(self):
        while self.in_game:
            self.__clear_screen()
            self.__check_events()
            self.__make_fall()
            self.__check_colision()
            self.__show()
            self.__set_fps()
            pygame.display.update()
    
    def __clear_screen(self):
        self.screen.fill((10, 0, 20))

    def __check_events(self):
        UP_ARROW = 273
        DOWN_ARROW = 274
        RIGHT_ARROW = 275
        LEFT_ARROW = 276

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
            
            if event.type == pygame.KEYDOWN and event.key == UP_ARROW: 
                self.tetromino.rotate(1)
                if self.__check_contact():
                    self.tetromino.rotate(-1)
            
            if event.type == pygame.KEYDOWN and event.key == LEFT_ARROW: 
                self.tetromino.move(-1)
                if self.__check_contact():
                    self.tetromino.move(1)
            
            if event.type == pygame.KEYDOWN and event.key == RIGHT_ARROW:
                self.tetromino.move(1)
                if self.__check_contact():
                    self.tetromino.move(-1)                
            
            if event.type == pygame.KEYDOWN and event.key == DOWN_ARROW:
                self.fall_slowly = False
            
            if event.type == pygame.KEYUP and event.key == DOWN_ARROW:
                self.fall_slowly = True
            
    def __set_fps(self):
        pygame.time.Clock().tick(self.FPS)    

    def __show(self):
        self.__draw_grid()
        self.tetromino.draw(self.screen, self.block_size)

    def __draw_grid(self):  
        for y, row in enumerate(self.grid):
            for x, element in enumerate(row):
                rect = (x*self.block_size, y*self.block_size, self.block_size, self.block_size)
                if element:
                    pygame.draw.rect(self.screen, self.colors[element-1], rect)
                    pygame.draw.rect(self.screen, (255,255,255), rect, 2)
    
    def __update(self):
        for row in range(4):
            for column in range(4):
                x = (self.tetromino.x + column) % self.columns
                y = self.tetromino.y + row - 1
                
                is_something = self.tetromino.grid[row][column] 

                if is_something:
                    this = self.grid[y][x]
                    other = self.tetromino.grid[row][column]
                    self.grid[y][x] = this or other

        self.__check_tetris()
        self.__create_tetromino()
    
    def __check_tetris(self):
        lines = []
        for line, row in enumerate(self.grid):
            if 0 not in row:
                lines.append(line)
        self.__clear_line(lines)

    def __clear_line(self, lines):
        for i in lines:
            self.grid.pop(i)
            self.grid = [[0]*self.columns] + self.grid

    def __check_colision(self):
        if self.__check_contact():
            self.__update()


    def __check_contact(self):
        for row in range(4):
            for column in range(4):
                x = (self.tetromino.x + column) % self.columns
                y = self.tetromino.y + row
                is_something = self.tetromino.grid[row][column] 

                if is_something:
                    touch_floor = y >= self.rows
                    if touch_floor:
                        return True

                    touch_piece = self.grid[y][x]
                    if touch_piece:
                        return True

        return False

    def __make_fall(self):  
        self.fall_time *= 0.9999
        self.fall_counter = (self.fall_counter + 1) % int(self.fall_time)
        self.fall_counter *= self.fall_slowly

        if self.fall_counter == 0:
            self.tetromino.fall()