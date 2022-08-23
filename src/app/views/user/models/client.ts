export class Client {
  id_client: number;
  nom: string;
  prenom: string;
  fonction: string;
  societe: string;
  service: string;
  domaine: string;
  email: string;
  telephonne: string;
  adress: string;
  provenance: string;
  ressource: string;
  etat_client: string;


  constructor(
    id_client: number,
    nom: string,
    prenom: string,
    fonction: string,
    societe: string,
    service: string,
    domaine: string,
    email: string,
    telephonne: string,
    adress: string,
    provenance: string,
    ressource: string,
    etat_client: string
  ) {
    this.id_client = id_client;

    this.nom = nom;
    this.prenom = prenom;
    this.fonction = fonction;
    this.service = service;
    this.provenance = provenance;
    this.ressource = ressource;

    this.societe = societe;
    this.etat_client = etat_client;
    this.email = email;
    this.telephonne = telephonne;

    this.adress = adress;
    this.domaine = domaine;
  }
}
