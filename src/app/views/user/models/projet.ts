export class Projet {
  id_projet: number;
  nom_societe: string;
  titre_besoin: string;
  candidat_nom: string;
  candidat_prenom: string;
  client_nom: string;
  client_prenom: string;
  etat_positionnement: string;
  etat_projet: string;
  commentaire: string;

  constructor(
    id_projet: number,
    nom_societe: string,
    titre_besoin: string,
    candidat_nom: string,
    candidat_prenom: string,
    client_nom: string,
    client_prenom: string,
    etat_positionnement: string,
    etat_projet: string,
    commentaire: string
  ) {
    this.id_projet = id_projet;
    this.nom_societe = nom_societe;
    this.titre_besoin = titre_besoin;
    this.candidat_nom = candidat_nom;
    this.candidat_prenom = candidat_prenom;
    this.client_nom = client_nom;
    this.client_prenom = client_prenom;
    this.etat_positionnement = etat_positionnement;
    this.etat_projet = etat_projet;
    this.commentaire = commentaire;
  }
}
