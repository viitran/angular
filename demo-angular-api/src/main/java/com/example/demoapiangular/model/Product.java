package com.example.demoapiangular.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(columnDefinition = "text")
    private String image;
    private Integer quantity;
    private Double price;
    @Column(columnDefinition = "longtext")
    private String description;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id",name = "id_cate")
    private Category category;
}
