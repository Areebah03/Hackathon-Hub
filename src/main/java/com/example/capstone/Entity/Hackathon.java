package com.example.capstone.Entity;


import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Hackathon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer hackathonId;
	private String name;
	private String theme;
	private LocalDateTime startDate;
	private LocalDateTime ideaSubmissionDeadline;
	private LocalDateTime shortListDeadLine;
	private LocalDateTime implementationSubmissionDeadLine;
	private LocalDateTime reviewStartTime;
	private LocalDateTime reviewEndTime;
	private String firstTeamId;
	private String secondTeamId;
	private String thirdTeamId;
	private boolean isCompleted;
	@OneToMany
	private List<Judge> judges;
	@OneToMany
	private List<Panelist> panelists;
	@OneToMany
	private List<Team> teams;
	public Integer getHackathonId() {
		return hackathonId;
	}
	public void setHackathonId(Integer hackathonId) {
		this.hackathonId = hackathonId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTheme() {
		return theme;
	}
	public void setTheme(String theme) {
		this.theme = theme;
	}
	public LocalDateTime getStartDate() {
		return startDate;
	}
	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}
	public LocalDateTime getIdeaSubmissionDeadline() {
		return ideaSubmissionDeadline;
	}
	public void setIdeaSubmissionDeadline(LocalDateTime ideaSubmissionDeadline) {
		this.ideaSubmissionDeadline = ideaSubmissionDeadline;
	}
	public LocalDateTime getShortListDeadLine() {
		return shortListDeadLine;
	}
	public void setShortListDeadLine(LocalDateTime shortListDeadLine) {
		this.shortListDeadLine = shortListDeadLine;
	}
	public LocalDateTime getImplementationSubmissionDeadLine() {
		return implementationSubmissionDeadLine;
	}
	public void setImplementationSubmissionDeadLine(LocalDateTime implementationSubmissionDeadLine) {
		this.implementationSubmissionDeadLine = implementationSubmissionDeadLine;
	}
	public LocalDateTime getReviewStartTime() {
		return reviewStartTime;
	}
	public void setReviewStartTime(LocalDateTime reviewStartTime) {
		this.reviewStartTime = reviewStartTime;
	}
	public LocalDateTime getReviewEndTime() {
		return reviewEndTime;
	}
	public void setReviewEndTime(LocalDateTime reviewEndTime) {
		this.reviewEndTime = reviewEndTime;
	}
	public String getFirstTeamId() {
		return firstTeamId;
	}
	public void setFirstTeamId(String firstTeamId) {
		this.firstTeamId = firstTeamId;
	}
	public String getSecondTeamId() {
		return secondTeamId;
	}
	public void setSecondTeamId(String secondTeamId) {
		this.secondTeamId = secondTeamId;
	}
	public String getThirdTeamId() {
		return thirdTeamId;
	}
	public void setThirdTeamId(String thirdTeamId) {
		this.thirdTeamId = thirdTeamId;
	}
	public boolean isCompleted() {
		return isCompleted;
	}
	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	public List<Judge> getJudges() {
		return judges;
	}
	public void setJudges(List<Judge> judges) {
		this.judges = judges;
	}
	public List<Panelist> getPanelists() {
		return panelists;
	}
	public void setPanelists(List<Panelist> panelists) {
		this.panelists = panelists;
	}
	public List<Team> getTeams() {
		return teams;
	}
	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}
	
	
}
