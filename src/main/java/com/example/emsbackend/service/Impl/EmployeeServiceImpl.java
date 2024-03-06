package com.example.emsbackend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.emsbackend.Entity.Employee;
import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.exception.ResourceNotfoundException;
import com.example.emsbackend.mapper.EmployeeMapper;
import com.example.emsbackend.repository.EmployeeRepository;
import com.example.emsbackend.service.EmployeeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto creatEmployee (EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee=employeeRepository.findById(employeeId)
		.orElseThrow(() -> 
		new ResourceNotfoundException("employeeId not found"+employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}


}
