import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../residence';
import { ResidenceDataService } from '../service/data/residence-data.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  id: number
  residence: Residence;

  states: [];
  cities: [];
  lgas: [];
  towns: [];
  lcdas: [];
  villages: [];
  streets: [];

  constructor(
    private residenceService: ResidenceDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.residence = new Residence(this.id, 0, 0, 0, 0, 0, 0, 0, '', '', '', new Date(), new Date())

    // if (this.id != -1) {
    //   this.residenceService.retrieveResidence(this.id).subscribe(
    //     data => this.residence = data
    //   )
    // }

    this.getAllStates();
    this.getAllCities();
    this.getAllLgas();
    this.getAllTowns();
    this.getAllLcdas();
    this.getAllVillages();
    this.getAllStreets();

  }

  saveResidence() {
    if (this.id === -1) {
      // Create Residence
      this.residenceService.createResidence(this.residence).subscribe(

        data => {
          console.log(data)
          this.router.navigate(['residences'])
        }
      )

      // Update Residence
    } else {
      this.residenceService.updateResidence(this.id, this.residence).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['residences'])
        }
      )
    }
  }

  // State implementation starts
  getAllStates() {
    this.residenceService.getAllStates().subscribe(
      response => {
        console.log(response);
        if (response.statusCode == 200) this.states = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getCityByStateId(stateId) {
    this.residenceService.retrieveCityByStateId(stateId).subscribe(
      response => {
        console.log(response);
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLgaByStateId(stateId) {
    this.residenceService.retrieveLgaByStateId(stateId).subscribe(
      response => {
        if (response.statusCode == 200) this.lgas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getTownByStateId(stateId) {
    this.residenceService.retrieveTownByStateId(stateId).subscribe(
      response => {
        if (response.statusCode == 200) this.towns = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLcdaByStateId(stateId) {
    this.residenceService.retrieveLcdaByStateId(stateId).subscribe(
      response => {
        if (response.statusCode == 200) this.lcdas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getVillageByStateId(stateId) {
    this.residenceService.retrieveVillageByStateId(stateId).subscribe(
      response => {
        if (response.statusCode == 200) this.villages = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByStateId(stateId) {
    this.residenceService.retrieveStreetByStateId(stateId).subscribe(
      response => {
        if (response.statusCode == 200) this.streets = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceState(stateId) {
    console.log(stateId);

    this.residence.stateId = stateId;
    this.getCityByStateId(stateId)
    this.getLgaByStateId(stateId)
    this.getTownByStateId(stateId)
    this.getLcdaByStateId(stateId)
    this.getVillageByStateId(stateId)
    this.getStreetByStateId(stateId)
  }
  // State implementation ends

  // City implementation starts
  getAllCities() {
    this.residenceService.getAllCities().subscribe(
      response => {
        console.log(response);
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLgaByCityId(cityId) {
    this.residenceService.retrieveLgaByCityId(cityId).subscribe(
      response => {
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getTownByCityId(cityId) {
    this.residenceService.retrieveTownByCityId(cityId).subscribe(
      response => {
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLcdaByCityId(cityId) {
    this.residenceService.retrieveLcdaByCityId(cityId).subscribe(
      response => {
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getVillageByCityId(cityId) {
    this.residenceService.retrieveVillageByCityId(cityId).subscribe(
      response => {
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByCityId(cityId) {
    this.residenceService.retrieveStreetByCityId(cityId).subscribe(
      response => {
        if (response.statusCode == 200) this.cities = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceCity(cityId) {

    console.log(cityId);

    this.residence.cityId = cityId;
    this.getLgaByCityId(cityId)
    this.getTownByCityId(cityId)
    this.getLcdaByCityId(cityId)
    this.getVillageByCityId(cityId)
    this.getStreetByCityId(cityId)
  }
  // City implementation ends

  // Lga implementation starts
  getAllLgas() {
    this.residenceService.getAllLgas().subscribe(
      response => {
        if (response.statusCode == 200) this.lgas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLcdaByLgaId(lgaId) {
    this.residenceService.retrieveLcdaByLgaId(lgaId).subscribe(
      response => {
        if (response.statusCode == 200) this.lgas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getVillageByLgaId(lgaId) {
    this.residenceService.retrieveVillageByLgaId(lgaId).subscribe(
      response => {
        if (response.statusCode == 200) this.lgas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByLgaId(lgaId) {
    this.residenceService.retrieveStreetByLgaId(lgaId).subscribe(
      response => {
        if (response.statusCode == 200) this.lgas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceLga(lgaId) {

    console.log(lgaId);
    this.residence.lgaId = lgaId;
    this.getLcdaByLgaId(lgaId)
    this.getVillageByLgaId(lgaId)
    this.getStreetByLgaId(lgaId)
  }
  // Lga implementation ends

  // Town implementation starts
  getAllTowns() {
    this.residenceService.getAllTowns().subscribe(
      response => {
        if (response.statusCode == 200) this.towns = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getLcdaByTownId(townId) {
    this.residenceService.retrieveLcdaByTownId(townId).subscribe(
      response => {
        if (response.statusCode == 200) this.towns = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getVillageByTownId(townId) {
    this.residenceService.retrieveVillageByTownId(townId).subscribe(
      response => {
        if (response.statusCode == 200) this.towns = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByTownId(townId) {
    this.residenceService.retrieveStreetByTownId(townId).subscribe(
      response => {
        if (response.statusCode == 200) this.towns = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceTown(townId) {

    console.log(townId);
    this.residence.townId = townId;
    this.getLcdaByTownId(townId)
    this.getVillageByTownId(townId)
    this.getStreetByTownId(townId)
  }
  // Town implementation ends

  // Lcda implementation starts
  getAllLcdas() {
    this.residenceService.getAllLcdas().subscribe(
      response => {
        if (response.statusCode == 200) this.lcdas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByLcdaId(lcdaId) {
    this.residenceService.retrieveStreetByLcdaId(lcdaId).subscribe(
      response => {
        if (response.statusCode == 200) this.lcdas = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceLcda(lcdaId) {

    console.log(lcdaId);
    this.residence.lcdaId = lcdaId;
    this.getStreetByLcdaId(lcdaId)
  }
  // Lcda implementation ends

  // Village implementation starts
  getAllVillages() {
    this.residenceService.getAllVillages().subscribe(
      response => {
        if (response.statusCode == 200) this.villages = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getStreetByVillageId(villageId) {
    this.residenceService.retrieveStreetByVillageId(villageId).subscribe(
      response => {
        if (response.statusCode == 200) this.villages = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceVillage(villageId) {

    console.log(villageId);
    this.residence.villageId = villageId;
    this.getStreetByVillageId(villageId)
  }
  // Village implementation ends

  // Street implementation starts
  getAllStreets() {
    this.residenceService.getAllStreets().subscribe(
      response => {
        if (response.statusCode == 200) this.streets = response.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  setResidenceStreet(streetId) {

    console.log(streetId);
    this.residence.streetId = streetId;
    this.getStreetByStateId(streetId)
    this.getStreetByCityId(streetId)
    this.getStreetByTownId(streetId)
    this.getStreetByLcdaId(streetId)
    this.getStreetByVillageId(streetId)
  }
  // Street implementation ends
}
