package com.greenfield.servicetogo.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.greenfield.servicetogo.car.entity.UserCredentialEntity;

public interface UserCredentialRepository extends JpaRepository<UserCredentialEntity, Long>{

}
