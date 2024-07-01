package com.example.demoapiangular.controller;

import com.example.demoapiangular.model.Product;
import com.example.demoapiangular.services.ICategoryService;
import com.example.demoapiangular.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/product")
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(this.iProductService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/cate")
    public ResponseEntity<?> getAllCate() {
        return new ResponseEntity<>(this.iCategoryService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> addNewProduct(@RequestBody Product product) {
        return new ResponseEntity<>(this.iProductService.save(product), HttpStatus.OK);
    }

    @PostMapping("/remove/{id}")
    public ResponseEntity<?> removeProduct(@PathVariable Integer id) {
        this.iProductService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody Product product) {
        this.iProductService.update(product, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(this.iProductService.findById(id), HttpStatus.OK);
    }
}
