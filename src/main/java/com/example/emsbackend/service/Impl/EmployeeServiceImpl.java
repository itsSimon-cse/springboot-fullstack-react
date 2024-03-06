package com.example.emsbackend.service.Impl;

import org.springframework.stereotype.Service;

import com.example.emsbackend.Entity.Employee;
import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.exception.ResourceNotfoundException;
import com.example.emsbackend.mapper.EmployeeMapper;
import com.example.emsbackend.repository.EmployeeRepository;
import com.example.emsbackend.service.EmployeeService;
import java.util.*;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto creatEmployee(EmployeeDto employeeDto) {
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() ->
						new ResourceNotfoundException("employeeId not found" + employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employee = employeeRepository.findAll();
//		return employee.stream().map(emp-> EmployeeMapper.mapToEmployeeDto(emp))
//				.collect(Collectors.toList());
		return employee.stream().map(EmployeeMapper::mapToEmployeeDto).toList();
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeID, EmployeeDto updatedEmployee) {

	Employee employee=	employeeRepository.findById(employeeID).orElseThrow(
				()-> new ResourceNotfoundException("no id in dB"+employeeID));
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		Employee updatedEmpObj=employeeRepository.save(employee);

		return EmployeeMapper.mapToEmployeeDto(updatedEmpObj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee=	employeeRepository.findById(employeeId).orElseThrow(
				()-> new ResourceNotfoundException("no id"+employeeId));
		employeeRepository.deleteById(employeeId);

	}


}