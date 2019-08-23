import random 
import pygame

class Tetromino():
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.model = 'O'
        self.pieces = []
        self.rotation = 0
        self.colors = {
            'T':(150, 30,  200),
            'I':(100, 100, 200),
            'O':(150, 200, 50 ),
            'J':(30,  50,  150),
            'L':(150, 100, 0  ),
            'S':(10,  200, 100),
            'Z':(200, 100, 50 ),
        }

        self.__create_pieces()
        self.__select_random_piece()
        self.__get_piece()
    
    def __select_random_piece(self):
        self.model = random.choice(list(self.pieces.keys()))

    def __get_piece(self):
        self.grid = self.pieces[self.model][self.rotation]

    def rotate(self, spin):
        self.rotation = (self.rotation + spin) % len(self.pieces[self.model]) 
        self.grid = self.pieces[self.model][self.rotation]

    def move(self, direction):
        self.x += direction
    
    def fall(self):
        self.y += 1
    
    def draw(self, screen, size):
        column_size = screen.get_width() // size
        for row in range(4):
            for column in range(4):
                if self.grid[row][column]:
                    x = ((column + self.x) % column_size) * size
                    y = (row + self.y) * size 
                    rect = (x, y, size, size)
                    pygame.draw.rect(screen, self.colors[self.model], rect)
                    pygame.draw.rect(screen, (255,255,255), rect, 2)

    def __create_pieces(self):
        piece_T = [
            [
                [0,1,0,0],
                [1,1,1,0],
                [0,0,0,0],
                [0,0,0,0],
            ],
            [
                [0,1,0,0],
                [0,1,1,0],
                [0,1,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [1,1,1,0],
                [0,1,0,0],
                [0,0,0,0],
            ],
            [
                [0,1,0,0],
                [1,1,0,0],
                [0,1,0,0],
                [0,0,0,0],
            ],
        ]

        piece_I = [
            [
                [0,2,0,0],
                [0,2,0,0],
                [0,2,0,0],
                [0,2,0,0],
            ],
            [
                [0,0,0,0],
                [2,2,2,2],
                [0,0,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,2,0],
                [0,0,2,0],
                [0,0,2,0],
                [0,0,2,0],
            ],
            [
                [0,0,0,0],
                [0,0,0,0],
                [2,2,2,2],
                [0,0,0,0],
            ],
        ]

        piece_O = [
            [
                [0,0,0,0],
                [0,3,3,0],
                [0,3,3,0],
                [0,0,0,0],
            ],
        ]

        piece_J = [
            [
                [0,4,0,0],
                [0,4,4,4],
                [0,0,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,4,4,0],
                [0,4,0,0],
                [0,4,0,0],
            ],
            [
                [0,0,0,0],
                [0,0,0,0],
                [4,4,4,0],
                [0,0,4,0],
            ],
            [
                [0,0,4,0],
                [0,0,4,0],
                [0,4,4,0],
                [0,0,0,0],
            ],
        ]

        piece_L = [
            [
                [0,0,0,0],
                [0,0,5,0],
                [5,5,5,0],
                [0,0,0,0],
            ],
            [
                [0,5,0,0],
                [0,5,0,0],
                [0,5,5,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,5,5,5],
                [0,5,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,5,5,0],
                [0,0,5,0],
                [0,0,5,0],
            ],
        ]

        piece_S = [
            [
                [0,0,0,0],
                [0,6,6,0],
                [6,6,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,6,0,0],
                [0,6,6,0],
                [0,0,6,0],
            ],
            [
                [0,0,0,0],
                [0,6,6,0],
                [6,6,0,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,6,0,0],
                [0,6,6,0],
                [0,0,6,0],
            ],
        ]

        piece_Z = [
            [
                [0,0,0,0],
                [7,7,0,0],
                [0,7,7,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,0,7,0],
                [0,7,7,0],
                [0,7,0,0],
            ],
            [
                [0,0,0,0],
                [7,7,0,0],
                [0,7,7,0],
                [0,0,0,0],
            ],
            [
                [0,0,0,0],
                [0,0,7,0],
                [0,7,7,0],
                [0,7,0,0],
            ],
        ]

        self.pieces = {'T':piece_T, 'I':piece_I, 'O':piece_O, 
        'J':piece_J, 'L':piece_L, 'S':piece_S, 'Z':piece_Z}