package com.example.emsbackend.service;

import java.util.List;

import com.example.emsbackend.dto.EmployeeDto;

public interface EmployeeService {
	
	EmployeeDto creatEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();

	EmployeeDto updateEmployee(Long employeeID, EmployeeDto updatedEmployee);

	void deleteEmployee(Long employeeId);

}
