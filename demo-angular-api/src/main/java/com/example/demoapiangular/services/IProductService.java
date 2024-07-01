package com.example.demoapiangular.services;

import com.example.demoapiangular.model.Product;
import java.util.*;

public interface IProductService {
    List<Product> findAll();

    Product save(Product product);

    void deleteById(Integer id);

    Product findById(Integer id);

    void update(Product product,Integer id);
}
