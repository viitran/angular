package com.example.demoapiangular.repository;

import com.example.demoapiangular.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category,Integer> {
}
