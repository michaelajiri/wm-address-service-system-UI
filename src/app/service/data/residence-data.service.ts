import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../app.constants';
import { Residence } from '../../../app/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceDataService {

  constructor(private http: HttpClient) { }

  // Residence start
  retrieveAllResidences() {
    return this.http.get<Residence[]>(`${API_URL}/addresses/residence/getall`);
  }

  retrieveResidence(id) {
    return this.http.get<Residence>(`${API_URL}/addresses/residence/get/${id}`);
  }

  createResidence(residence) {
    return this.http.post(`${API_URL}/addresses/residence/create`, residence);
  }

  updateResidence(id, residence) {
    return this.http.put(`${API_URL}/addresses/residence/edit/${id}`, residence);
  }

  removeResidence(id) {
    return this.http.delete(`${API_URL}/addresses/residence/delete/${id}`);
  }
  // Residence end

  // State start
  getAllStates() {
    return this.http.get<any>(`${API_URL}/addresses/state/getall`);
  }

  retrieveCityByStateId(id) {
    // console.log(id);
    return this.http.get<any>(`${API_URL}/addresses/city/getcitybystate/${id}`);
  }

  retrieveLgaByStateId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lga/getlgabystate/${id}`);
  }

  retrieveTownByStateId(id) {
    return this.http.get<any>(`${API_URL}/addresses/town/gettownbystate/${id}`);
  }

  retrieveLcdaByStateId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lcda/getlcdabystate/${id}`);
  }

  retrieveVillageByStateId(id) {
    return this.http.get<any>(`${API_URL}/addresses/village/getvillagebystate/${id}`);
  }

  retrieveStreetByStateId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbystate/${id}`);
  }
  // State ends

  // City starts
  getAllCities() {
    return this.http.get<any>(`${API_URL}/addresses/city/getall`);
  }

  retrieveLgaByCityId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lga/getlgabycity/${id}`);
  }

  retrieveTownByCityId(id) {
    return this.http.get<any>(`${API_URL}/addresses/town/gettownbycity/${id}`);
  }

  retrieveLcdaByCityId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lcda/getlcdabycity/${id}`);
  }

  retrieveVillageByCityId(id) {
    return this.http.get<any>(`${API_URL}/addresses/village/getvillagebycity/${id}`);
  }

  retrieveStreetByCityId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbycity/${id}`);
  }
  // City ends

  // Lga starts
  getAllLgas() {
    return this.http.get<any>(`${API_URL}/addresses/lga/getlgabystateandcity`);
  }

  retrieveLcdaByLgaId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lcda/getlcdabylga/${id}`);
  }

  retrieveVillageByLgaId(id) {
    return this.http.get<any>(`${API_URL}/addresses/village/getvillagebylga/${id}`);
  }

  retrieveStreetByLgaId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbylga/${id}`);
  }
  // Lga ends

  // Town starts
  getAllTowns() {
    return this.http.get<any>(`${API_URL}/addresses/town/gettownbystateandcity`);
  }

  retrieveLcdaByTownId(id) {
    return this.http.get<any>(`${API_URL}/addresses/lcda/getlcdabytown/${id}`);
  }

  retrieveVillageByTownId(id) {
    return this.http.get<any>(`${API_URL}/addresses/village/getvillagebytown/${id}`);
  }

  retrieveStreetByTownId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbytown/${id}`);
  }
  // Town ends

  // Lcda starts
  getAllLcdas() {
    return this.http.get<any>(`${API_URL}/addresses/lcda/getlcdabystateandcity`);
  }

  retrieveStreetByLcdaId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbylcda/${id}`);
  }
  // Lcda ends

  // Village starts
  getAllVillages() {
    return this.http.get<any>(`${API_URL}/addresses/village/getvillagebystateandcity`);
  }

  retrieveStreetByVillageId(id) {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbyvillage/${id}`);
  }
  // Village ends

  // Street starts
  getAllStreets() {
    return this.http.get<any>(`${API_URL}/addresses/street/getstreetbystateandcity`);
  }
  // Street ends
}
