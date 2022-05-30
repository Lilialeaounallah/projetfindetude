export class Ressource {
  civilite:string;
  nom:string;
  prenom:string;
  type_ressource:string;
  email:string;
  adress:string;
  code_postal:string;
  ville:string;
  pays:string;
  etat_ressource:string;
  TJM:number;
  devis:number;
  disponibilite:string;
  mobilite:string;
  commentaire:string;


  constructor(
    civilite:string,
  nom:string,
  prenom:string,
  type_ressource:string,
  email:string,
  adress:string,
  code_postal:string,
  ville:string,
  pays:string,
  etat_ressource:string,
  TJM:number,
  devis:number,
  disponibilite:string,
  mobilite:string,
  commentaire:string){
    this.civilite=civilite;
    this.nom=nom;
    this.prenom=prenom;
    this.type_ressource=type_ressource;
    this.email=email;
    this.adress=adress;
    this.code_postal=code_postal;
    this.ville=ville;
    this.pays=pays;
    this.etat_ressource=etat_ressource;
    this.TJM=TJM;
    this.devis=devis;
    this.disponibilite=disponibilite;
    this.mobilite=mobilite;
    this.commentaire=commentaire;

  }


}
