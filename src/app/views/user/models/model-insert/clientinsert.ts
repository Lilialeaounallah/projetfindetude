
export class Clientinsert {
  civilite: string;
  nom: string;
  prenom: string;
  fonction: string;
  service: string;
  provenance: number;
  libellet_preciser: string;
  ressource: number;
  agence: string;
  societe: number;
  etat_client: number;
  email: string;
  telephonne: string;
  adress: string;
  code_postal: string;
  ville: string;
  pays: string;
  libellet_comentaire: string;
  domaine: number;
  outils: number;
  constructor(
    civilite: string,
    nom: string,
    prenom: string,
    fonction: string,
    service: string,
    provenance: number,
    libellet_preciser: string,
    ressource: number,
    agence: string,
    societe: number,
    etat_client: number,
    email: string,
    telephonne: string,
    adress: string,
    code_postal: string,
    ville: string,
    pays: string,
    libellet_comentaire: string,
    domaine: number,
    outils: number){


      this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.fonction = fonction;
    this.service = service;
    this.provenance = provenance;
    this.libellet_preciser = libellet_preciser;
    this.ressource = ressource;
    this.agence = agence;
    this.societe = societe;
    this.etat_client = etat_client;
    this.email = email;
    this.telephonne = telephonne;
    this.adress = adress;
    this.code_postal = code_postal;
    this.ville = ville;
    this.pays = pays;
    this.libellet_comentaire = libellet_comentaire;
    this.domaine = domaine;
    this.outils = outils;

  }
}
