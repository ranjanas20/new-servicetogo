package com.greenfield.servicetogo.car.dto;

import javax.persistence.Column;

public class RoleDTO {
	 
	private String roleName;
	    
	private String roleDescription;

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDescription() {
		return roleDescription;
	}

	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}

	
}
