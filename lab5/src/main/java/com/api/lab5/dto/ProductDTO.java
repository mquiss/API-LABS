package com.api.lab5.dto;

import com.api.lab5.model.Category;
import lombok.Data;

import java.util.List;

@Data
public class ProductDTO {
    private String nombre;
    private String descripcion;
    private String imagen;
    private double precio;
    private List<Category> categorias;
}