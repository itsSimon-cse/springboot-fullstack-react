package com.example.emsbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.emsbackend.dto.EmployeeDto;
import com.example.emsbackend.service.EmployeeService;

import lombok.AllArgsConstructor;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/Employee")
public class EmployeeController {
	
	private EmployeeService employeeService;
	
	//addemployee api
	@PostMapping
	public ResponseEntity<EmployeeDto> creatEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto savedEmployee=employeeService.creatEmployee(employeeDto);
		return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
				
	}
	//getemployee api
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
		EmployeeDto employeeDto=employeeService.getEmployeeById(employeeId);
		return ResponseEntity.ok(employeeDto);
	}
	@GetMapping
	public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
	List <EmployeeDto> employee=employeeService.getAllEmployees();
		return ResponseEntity.ok(employee);
	}

	@PutMapping("{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
													  @RequestBody EmployeeDto updatedEmployeeDto){
		EmployeeDto employeeDto=employeeService.updateEmployee(employeeId,updatedEmployeeDto);
		return ResponseEntity.ok(employeeDto);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
		employeeService.deleteEmployee(employeeId);
		return ResponseEntity.ok("deleted");
	}

	
}
