import { Host, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { HOST } from './host-name';

import { Metadata } from './metadata';
import { Latestprice } from './latestprice';
import { News } from './news';
import { DailyPrice } from './daily-price';
import { HistPrice } from './hist-price';
import { SearchUtility } from './search-utility';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private searchutilPre = HOST + 'api/v1.0.0/searchutil';
  private metadataPre = HOST + 'api/v1.0.0/metadata';
  private latestPricePre = HOST + 'api/v1.0.0/latestprice';
  private newsPre = HOST + 'api/v1.0.0/news';
  private dailyChartsPre = HOST + 'api/v1.0.0/dailycharts';
  private histChartsPre = HOST + 'api/v1.0.0/histcharts';

  constructor(private http: HttpClient) {}

  fetchSearchutil(ticker: string): Observable<SearchUtility[]> {
    const searchutilUrl = `${this.searchutilPre}/${ticker}`;
    return this.http.get<SearchUtility[]>(searchutilUrl).pipe(
      catchError(this.handleError('fetchSearchutil', [])) // then handle the error
    );
  }

  fetchMetadata(ticker: string): Observable<Metadata> {
    const metaDataUrl = `${this.metadataPre}/${ticker}`;

    return this.http.get<Metadata>(metaDataUrl); //.subscribe(data => console.log(data));
    // .pipe(catchError(this.handleError('fetchMetadata', [])) // then handle the error
    // );
  }

  fetchLatestPrice(ticker: string): Observable<Latestprice> {
    const latestPriceUrl = `${this.latestPricePre}/${ticker}`;
    return this.http.get<Latestprice>(latestPriceUrl);
    // .pipe(
    //   catchError(this.handleError('fetchLatestPrice', [])) // then handle the error
    // );
  }

  fetchNews(ticker: string): Observable<News[]> {
    const newsUrl = `${this.newsPre}/${ticker}`;
    return this.http.get<News[]>(newsUrl);
    // .pipe(
    //   catchError(this.handleError('fetchNews', [])) // then handle the error
    // );
  }

  fetchDailyCharts(
    ticker: string,
    startDate: string
  ): Observable<DailyPrice[]> {
    const dailyChartsUrl = `${this.dailyChartsPre}/${ticker}/date/${startDate}`;
    return this.http.get<DailyPrice[]>(dailyChartsUrl);

    // .pipe(
    //   catchError(this.handleError('fetchDailyCharts', [])) // then handle the error
    // );
  }

  fetchHistCharts(ticker: string, startDate: string): Observable<HistPrice[]> {
    const histChartsUrl = `${this.histChartsPre}/${ticker}/date/${startDate}`;
    return this.http.get<HistPrice[]>(histChartsUrl);
    // .pipe(
    //   catchError(this.handleError('fetchHistCharts', [])) // then handle the error
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
