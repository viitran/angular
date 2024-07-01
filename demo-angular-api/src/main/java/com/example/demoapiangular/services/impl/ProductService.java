package com.example.demoapiangular.services.impl;

import com.example.demoapiangular.model.Product;
import com.example.demoapiangular.repository.IProductRepository;
import com.example.demoapiangular.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> findAll() {
        return this.iProductRepository.getAll();
    }

    @Override
    public Product save(Product product) {
        return this.iProductRepository.save(product);
    }

    @Override
    public void deleteById(Integer id) {
        this.iProductRepository.deleteById(id);
    }

    @Override
    public Product findById(Integer id) {
        return this.iProductRepository.findProductById(id);
    }

    @Override
    public void update(Product product,Integer id) {
         this.iProductRepository.update(product,id);
    }
}
