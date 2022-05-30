import * as internal from "stream";

export class Besoin {
  titre:string;
  reference_besoin:string;
  client:string;
  societe:string;
    etat_besoin:string;
    etape_besoin:string;
    discription:string;
    domaine:string;
    devis:number;
    budget_envisage:number;
    ponderation:number;
    ca_envisage:number;
    ca_pondere:number;
    duree:string;
    date_demarrage:Date;
    date_cloture:Date;
    date_reponse:Date;
    commentaire:string
  constructor(titre:string,reference_besoin:string,client:string,societe:string,
    etat_besoin:string,etape_besoin:string,discription:string,domaine:string,devis:number,
    budget_envisage:number,ponderation:number,ca_envisage:number,ca_pondere:number,
    duree:string,date_demarrage:Date,date_colture:Date,date_reponse:Date,commentaire:string){
    this.titre=titre;
    this.reference_besoin=reference_besoin;
    this.client=client;
    this.societe=societe;
    this.etat_besoin=etat_besoin;
    this.etape_besoin=etape_besoin;
    this.discription=discription;
    this.domaine=domaine;
    this.devis=devis;
    this.ponderation=ponderation;
    this.budget_envisage=budget_envisage;
    this.ca_envisage=ca_envisage;
    this.ca_pondere=ca_pondere;
    this.duree=duree;
    this.date_demarrage=date_demarrage;
    this.date_reponse=date_reponse;
    this.date_cloture=date_colture;
    this.commentaire=commentaire;


  }
}
