# NewsCloud
App week 3 Cloud Computing News Clouds

#Tài nguyên của dự án:
https://drive.google.com/drive/folders/1UgG59-YHmUrUtTWNylm4GcmiWL1DWEjg?usp=sharing
  
# CloudComputing
Môn điện toán đám mây học cô Đặng Thị Kim Giao
Đề tài: Kinh doanh máy vi tính - học về cloud
Sử dụng <b style="font-style: italic">reactJS Express MySQL</b>

#Task: Lưu ý task nào xong thì // chứ không xóa

#Error:

#UPDATE: CSDL MySQL(link tài nguyên dự án trong thư mục CLOUD GOOGLE
LOAD THÀNH CÔNG GIAO DIỆN VỚI MÔ HÌNH 3 LỚP VÀ CÁC CÔNG NGHỆ TRÊN


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


How to Dockerize a React App and Deploy in Elastic Beanstalk


Docker Configuartion Steps
1. Create file called "Dockerfile" and add the following lines, be sure to change version to a number i.e: 10.12.0 Use node -v to find version

FROM node:version
container .

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000
2. Create .dockerignore file and add in the following lines

node_modules
npm-debug.log
Docker Build Steps
1. Build docker first

docker build -t docker-name .
2. Run docker to test.

docker run -p 8081:3000 professional-portfolio
Elastic Beanstalk Steps
1. Commit changes to git

git add .

git commit -m "Eb Deploy Settings"

git push
2. Initialize EB

eb init 

Select default -> Create new application -> Enter application name -> Setup ssh
3. Create EB Environment

eb create

Select default -> Select Name
4. Deploy EB

eb use environment name

eb deploy
5. Confirm EB is deployed

eb open