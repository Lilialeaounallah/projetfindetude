export class Besoin {
  id_besoin:number;
  titre:string;
  reference_besoin:string;
  nom_client:string;
  nom_societe:string;
  etat_besoin:string;
  type_besoin:string;
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
  constructor(
    id_besoin:number,titre:string,reference_besoin:string,nom_client:string,nom_societe:string,
    etat_besoin:string,type_besoin:string,discription:string,domaine:string,devis:number,
    budget_envisage:number,ponderation:number,ca_envisage:number,ca_pondere:number,
    duree:string,date_demarrage:Date,date_colture:Date,date_reponse:Date,commentaire:string){


      this.id_besoin=id_besoin;
    this.titre=titre;
    this.reference_besoin=reference_besoin;
    this.nom_client=nom_client;
    this.nom_societe=nom_societe;
    this.etat_besoin=etat_besoin;
    this.type_besoin=type_besoin;
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
