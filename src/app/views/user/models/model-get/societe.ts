

//societe.id_societe, societe.nom, effectif, societe_mere, agence, telephonne, site_web, societe.adress, societe.code_postal,
//societe.ville, societe.pays, statut_juridique, tva_ic, siret, code_ape,ressource.nom as nom_ressource
export class Societe {
  id!:number;
  nom: string;
  effectif: number;
  societe_mere: string;
  agence:string;
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
  ressource: number;
 secteur: number;
  provenance: number;


  constructor(
    id:number,
    nom: string,
    effectif: number,
    societe_mere: string,
    agence: string,

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
    secteur: number,
    provenance: number,
    ressource: number
  ) {
    this.id=id;
    this.nom = nom;
    this.effectif = effectif;
    this.societe_mere = societe_mere;
    this.secteur = secteur;
    this.provenance = provenance;
    this.agence= agence;
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
    this.ressource = ressource;
  }
}
