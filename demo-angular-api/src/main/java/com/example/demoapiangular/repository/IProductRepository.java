package com.example.demoapiangular.repository;

import com.example.demoapiangular.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(nativeQuery = true, value = "select * from product")
    List<Product> getAll();

    @Query(nativeQuery = true, value = "select * from product where id = :id")
    Product findProductById(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "update product " +
            "set name = :#{#product.name} , " +
            "image = :#{#product.image} , " +
            "description = :#{#product.description} , " +
            "price = :#{#product.price} , " +
            "quantity = :#{#product.quantity} , id_cate = :#{#product.getCategory().getId()} " +
            " where id = :id", nativeQuery = true)
    void update(@Param("product") Product product,@Param("id")Integer id);
}
