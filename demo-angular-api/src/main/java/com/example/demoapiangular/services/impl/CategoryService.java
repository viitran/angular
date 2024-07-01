package com.example.demoapiangular.services.impl;

import com.example.demoapiangular.model.Category;
import com.example.demoapiangular.repository.ICategoryRepository;
import com.example.demoapiangular.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Override
    public List<Category> findAll() {
        return this.iCategoryRepository.findAll();
    }
}
