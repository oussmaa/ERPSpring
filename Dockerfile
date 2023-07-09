FROM openjdk:18
EXPOSE 5050
ADD target/*.jar erpspring.jar
ENTRYPOINT ["java","-jar","erpspring.jar"]