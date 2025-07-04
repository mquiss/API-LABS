package com.api.lab5.mapper;

import com.api.lab5.dto.ProductDTO;
import com.api.lab5.model.Product;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class ProductMapper {
    public Product toEntity(ProductDTO dto) {
        Product product = new Product();

        product.setNombre(dto.getNombre());
        product.setPrecio(dto.getPrecio());
        product.setImagen(dto.getImagen());
        product.setDescripcion(dto.getDescripcion());
        product.setCategorias(dto.getCategorias());
        product.setCreatedAt(new Date());

        return product;
    }

    public ProductDTO toDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();

        productDTO.setNombre(product.getNombre());
        productDTO.setImagen(product.getImagen());
        productDTO.setPrecio(product.getPrecio());
        productDTO.setDescripcion(product.getDescripcion());
        productDTO.setCategorias(product.getCategorias());

        return productDTO;
    }
}
