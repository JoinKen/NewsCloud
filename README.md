# NewsCloud
App week 3 Cloud Computing News Cloud

# CloudComputing
Môn điện toán đám mây học cô Đặng Thị Kim Giao
Đề tài: Kinh doanh máy vi tính - học về cloud
Sử dụng <b style="font-style: italic">reactJS Express MySQL</b>

#Tài nguyên của dự án:
https://drive.google.com/drive/folders/1UgG59-YHmUrUtTWNylm4GcmiWL1DWEjg?usp=sharing


#HOW TO USE:
<p style="color: green">
    //Fix error user root</p>
1.1 Open your mySQL client
1.2 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' <p style="color: red">//1 past all
</p>


<p style="color: green">//Connect CSDL mySQL Cloud using Proxy:</p>
2.1 Open cloud shell sdk and ( turn off service mySQL or using port != 3306 )
2.2 $> cloud_sql_proxy -instances=[instance connection name]=tcp:3306

<p style="color: green">//SET UP biến môi trường</p>
3.1 Terminal your App:
3.2 ~> SET SQL_USER=[your user]
3.3 ~> SET SQL_PASSWORD=[your pass]
3.4 ~> SET INSTANCE_CONNECTION_NAME=[your project id]:[you app region]:[your instance]