package com.sliit.af2018.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "courses")
public class Course {
	private String name;
	private String code;
	private String passMark;
	private String lectureInCharge;
	private List<String> subject;

	public Course() {
		super();
	}

	public Course(String name, String code, String passMark, String lectureInCharge, List<String> subject) {
		super();
		this.name = name;
		this.code = code;
		this.passMark = passMark;
		this.lectureInCharge = lectureInCharge;
		this.subject = subject;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPassMark() {
		return passMark;
	}

	public void setPassMark(String passMark) {
		this.passMark = passMark;
	}

	public String getLectureInCharge() {
		return lectureInCharge;
	}

	public void setLectureInCharge(String lectureInCharge) {
		this.lectureInCharge = lectureInCharge;
	}

	public List<String> getSubject() {
		return subject;
	}

	public void setSubject(List<String> subject) {
		this.subject = subject;
	}

}
