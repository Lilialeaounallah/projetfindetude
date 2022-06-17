export class Ressource {

  id_ressource:string;
  civilite:string;
  nom:string;
  prenom:string;
  type_ressource:string;
etat_ressource:string;
  email:string;
  adress:string;
  code_postal:string;
  ville:string;
  pays:string;
  TJM:number;
  devis:number;
  mobilite:string;
  commentaire:string;


  constructor(
    id_ressource:string,
    civilite:string,
  nom:string,
  prenom:string,
  type_ressource:string,
  etat_ressource:string,
  email:string,
  adress:string,
  code_postal:string,
  ville:string,
  pays:string,
  TJM:number,
  devis:number,
  mobilite:string,
  commentaire:string){
    this.id_ressource=id_ressource;
    this.civilite=civilite;
    this.nom=nom;
    this.prenom=prenom;
    this.type_ressource=type_ressource;
    this.etat_ressource=etat_ressource;
    this.email=email;
    this.adress=adress;
    this.code_postal=code_postal;
    this.ville=ville;
    this.pays=pays;
    this.TJM=TJM;
    this.devis=devis;
    this.mobilite=mobilite;
    this.commentaire=commentaire;

  }


}
