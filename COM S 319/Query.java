package coms363project1;

import java.sql.*;

public class Query {
	private static Connection connect = null;
	public static void main(String[]args) {
		try{
			String userName = "coms363";
			String password = "password";
			String dbServer = "jdbc:mysql://localhost:3306/project1";

			connect = DriverManager.getConnection(dbServer,userName,password);
			
		}catch(Exception e){
			System.out.println(e);
		}
		
		Statement st = null;
		
		
		ResultSet resultSet = null;
		String sqlQuery ="";
		String outputString ="";
		
		try {
			st = connect.createStatement();
			sqlQuery = "select snum, ssn from students where name = 'Becky';";
			resultSet = st.executeQuery(sqlQuery);
			outputString = "#1\n";
			
			while(resultSet.next()) {
				outputString += "Student#: " + resultSet.getInt("snum") + "\n";
				outputString += "SSN: " + resultSet.getInt("ssn") + "\n";
			}
			
			System.out.println(outputString + "\n");
			
			sqlQuery = "select M.name,M.level from major M\r\n"
					+ "	inner join students S \r\n"
					+ "	on M.snum = S.snum \r\n"
					+ "	and S.ssn = '123097834';";
			resultSet = st.executeQuery(sqlQuery);
			outputString = "#2\n";
			
			while(resultSet.next()) {
				outputString += "Major: " + resultSet.getString("name") + "\n";
				outputString += "Level: " + resultSet.getString("level") + "\n";
			}
			
			System.out.println(outputString + "\n");
			
			sqlQuery = "select C.name from courses C\r\n"
					+ "	inner join departments D \r\n"
					+ "	on c.department_code = D.code\r\n"
					+ "	and D.name = 'Computer Science';";
			resultSet = st.executeQuery(sqlQuery);
			outputString = "#3\n";
			while(resultSet.next()) {
				outputString += "Course Subject: " + resultSet.getString("name") + "\n";
			}
			
			System.out.println(outputString + "\n");
		
			sqlQuery = "select G.name, G.level from degrees G\r\n"
					+ "	inner join departments D\r\n"
					+ "    on g.department_code = d.code\r\n"
					+ "	and D.name = 'Computer Science';";
			resultSet = st.executeQuery(sqlQuery);
			outputString = "#4\n";
			while(resultSet.next()) {
				outputString += "Major: " + resultSet.getString("name") + "\n";
			}
			
			System.out.println(outputString + "\n");
			
		
			sqlQuery = "select S.name from students S\r\n"
					+ "	inner join minor N\r\n"
					+ "    on S.snum = N.snum;";	
			resultSet = st.executeQuery(sqlQuery);
			outputString = "#5\n";
			
			while(resultSet.next()) {
				outputString += "Student Name: " + resultSet.getString("name") + "\n";
			}
			
			System.out.println(outputString + "\n");

		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				if(st != null) {
					st.close();
				}
				if(connect != null) {
					connect.close();
				}
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
}
