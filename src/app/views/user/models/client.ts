export class Client {
  id:number;
  civilite:string;
  nom:string;
  prenom:string;
  fonction:string;
  service:string;

  provenance:string;;
  ressource:string;
  agence:string;
  societe:string;
  etat_client:string;

  email:string;
  telephonne:string;
  adress:string;
  code_postal:string;
  ville:string;
  pays:string;
  commentaire:string;
  domaine:string;
  outils:string;
  constructor(
    id:number,
    civilite:string,
  nom:string,
  prenom:string,
  fonction:string,
  service:string,
  provenance:string,
  ressource:string,
  agence:string,
  societe:string,
  etat_client:string,
  email:string,
  telephonne:string,

  adress:string,
  code_postal:string,
  ville:string,
  pays:string,
  commentaire:string,
  domaine:string,
  outils:string

  ){
    this.id=id;
    this.civilite=civilite;
    this.nom=nom;
    this.prenom=prenom;
    this.fonction=fonction;
  this.service=service;
  this.provenance=provenance;
  this.ressource=ressource;
  this.agence=agence;
  this.societe=societe;
  this.etat_client=etat_client;
  this.email=email;
  this.telephonne=telephonne;

  this.adress=adress;
  this.code_postal=code_postal;
  this.ville=ville;
  this.pays=pays;
  this.commentaire=commentaire;
  this.domaine=domaine;
  this.outils=outils;
  }

}
