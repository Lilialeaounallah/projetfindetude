export class Societe {
  nom: string;
  effectif: number;
  societe_mere: string;
  agence: string;
  secteur: string;
  provenance: string;
  telephonne: number;
  site_web: string;
  adress: string;
  code_postal: number;
  ville: string;
  pays: string;
  statut_juridique: string;
  tva_ic: string;
  siret: string;
  code_ape: string;
  etat_societe: string;
  ressource: string;

  constructor(
    nom: string,
    effectif: number,
    societe_mere: string,
    agence: string,
    secteur: string,
    provenance: string,
    telephonne: number,
    site_web: string,
    adress: string,
    code_postal: number,
    ville: string,
    pays: string,
    statut_juridique: string,
    tva_ic: string,
    siret: string,
    code_ape: string,
    etat_societe: string,
    ressource: string
  ) {
    this.nom = nom;
    this.effectif = effectif;
    this.societe_mere = societe_mere;
    this.agence = agence;
    this.secteur = secteur;
    this.provenance = provenance;
    this.telephonne = telephonne;
    this.site_web = site_web;
    this.adress = adress;
    this.code_postal = code_postal;
    this.ville = ville;
    this.pays = pays;
    this.statut_juridique = statut_juridique;
    this.tva_ic = tva_ic;
    this.siret = siret;
    this.code_ape = code_ape;
    this.etat_societe = etat_societe;
    this.ressource = ressource;
  }
}
