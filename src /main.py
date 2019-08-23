import pygame 
from game import Game

screen = pygame.display.set_mode((300, 600))
pygame.display.set_caption('Tetros')


# print(dir(screen))
# print(screen.get_width())
# print(screen.get_height())

game = Game(screen)