print("hi im shahin")

import numpy as np

class graph:
    def __init__(self, vertices):
        self.mat = np.zeros((vertices, vertices))
        self.vertices = vertices
    def insert_edge(self, u, v, w=1):
        self.mat[u][v] = w
    def delete_edge(self, u, v):
        self.mat[u][v] = 0
    def get_edge(self, u, v):
        return self.mat[u][v]
    def get_vertices(self):
        return self.vertices
    
    def edge_count(self):
        count = 0
        for i in range(self.vertices):
            for j in range(self.vertices):
                if not self.get_edge == 0:
                    count += 1
                return count
    
    def indegree(self, u):
        count = 0
        for i in range(self.vertices):
                if not self.mat[i][u] == 0:
                    count += 1
                return count
    
    def outdegree(self, u):
        count = 0
        for i in range(self.vertice):
                if not self.mat[i][u] == 0:
                    count += 1
                return count
            
    def display(self):
        print(self.mat)
