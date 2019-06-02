package com.sliit.af2018.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.af2018.models.Subject;
import com.sliit.af2018.repository.SubjectRepository;
import com.sliit.af2018.service.SubjectService;

@Service
public class SubjectServiceImpl implements SubjectService{

	@Autowired
	private SubjectRepository subjectRepository;
	
	@Override
	public Subject find(String id) {
		return subjectRepository.findById(id).orElse(null);
	}

}
