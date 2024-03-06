package com.example.emsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emsbackend.Entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long >{

}
