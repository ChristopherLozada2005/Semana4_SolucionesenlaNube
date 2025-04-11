FROM node
 LABEL maintainer="christopher.lozada@tecsup.edu.pe"
 RUN git clone -q https://github.com/ChristopherLozada2005/Semana4_SolucionesenlaNube.git
 WORKDIR Semana4_SolucionesenlaNube
 RUN npm install > /dev/null
 EXPOSE 5000
 CMD [ "npm","start" ]