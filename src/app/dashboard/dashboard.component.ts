import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  apiURL: string;
  albums: any[];
  searchTerm: string;

  constructor(private httpClient: HttpClient) { 
    this.apiURL = 'https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=';
    this.albums = [];
    this.searchTerm = '';
  }

  isEmptyArray(testArray:any[]) {
    if (testArray.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getAlbums() {
    if (this.searchTerm) {
      const properTerm = this.searchTerm.toLowerCase().replace(' ', '_');
      this.apiURL += properTerm;
    }

    this.httpClient.get(this.apiURL)
      .toPromise()
      .then((response:any) => {
        this.albums =(response.album);
    })
  }

  ngOnInit(): void {
  }
}

// <!-- In the Dashboard -->
// <!-- Query this API: https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=daft_punk -->
// <!-- Display the results on the page (Album, artist, art, etc.) -->
// <!-- Create a search-box component which will query the API -->
// <!-- EXTENSION (Difficult): Create a child component called filter-dropdown. -->
// <!-- It should take filterOptions as an Input. -->
// <!-- Output the fiterOptions which were chosen -->
// <!-- The parent should adjust the results accordingly -->