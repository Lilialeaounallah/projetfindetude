export class Positionnement {
  id_positionnement:number;
  nom_societe:string;
  titre_besoin:string;
  candidat_nom:string;
   candidat_prenom:string;
   client_nom:string;
   client_prenom:string;
   etat_positionnement:string;


  constructor(
    id_positionnement:number,
    nom_societe:string,
    titre_besoin:string,
    candidat_nom:string,
     candidat_prenom:string,
     client_nom:string,
     client_prenom:string,
     etat_positionnement:string
     ){
       this.id_positionnement=id_positionnement;
       this.nom_societe=nom_societe;
       this.titre_besoin=titre_besoin;
       this.candidat_nom=candidat_nom;
       this.candidat_prenom=candidat_prenom;
       this.client_nom=client_nom;
       this.client_prenom=client_prenom;
       this.etat_positionnement=etat_positionnement;
    }

}
