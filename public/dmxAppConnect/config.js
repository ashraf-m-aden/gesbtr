dmx.config({
  "main": {
    "global": [
      {
        "type": "text",
        "name": "title"
      }
    ]
  },
  "navbar": {
    "localStorage": [
      {
        "type": "text",
        "name": "nom"
      },
      {
        "type": "text",
        "name": "matricule"
      },
      {
        "type": "text",
        "name": "token"
      }
    ],
    "api1": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdPeriode"
          },
          {
            "type": "text",
            "name": "NomPeriode"
          },
          {
            "type": "number",
            "name": "Duree"
          },
          {
            "type": "text",
            "name": "DatePeriode"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "sidebar": {
    "actualPage": {
      "meta": null,
      "outputType": "text"
    }
  },
  "bordereau": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "getReleve": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "num_releve"
          },
          {
            "type": "number",
            "name": "index_a"
          },
          {
            "type": "text",
            "name": "date_releve"
          },
          {
            "type": "text",
            "name": "fin_periode"
          },
          {
            "type": "number",
            "name": "consommation"
          },
          {
            "type": "number",
            "name": "moy_consommation"
          },
          {
            "type": "text",
            "name": "date_saisie"
          },
          {
            "type": "number",
            "name": "utilisateur_der_maj"
          },
          {
            "type": "text",
            "name": "date_der_maj"
          },
          {
            "type": "number",
            "name": "num_cpteur"
          },
          {
            "type": "number",
            "name": "num_tourne"
          },
          {
            "type": "number",
            "name": "id_periode"
          },
          {
            "type": "number",
            "name": "id_pl"
          },
          {
            "type": "text",
            "name": "anomalie"
          },
          {
            "type": "number",
            "name": "type_releve"
          },
          {
            "type": "number",
            "name": "nature_releve"
          },
          {
            "type": "number",
            "name": "matricule"
          },
          {
            "type": "text",
            "name": "coment"
          },
          {
            "type": "number",
            "name": "id_contrat"
          },
          {
            "type": "number",
            "name": "id_periode_prec"
          },
          {
            "type": "text",
            "name": "facture_faite"
          },
          {
            "type": "number",
            "name": "num_bordereaux"
          },
          {
            "type": "text",
            "name": "reprise"
          },
          {
            "type": "text",
            "name": "date_pf"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "releveView": {
      "meta": [
        {
          "type": "number",
          "name": "num_releve"
        },
        {
          "type": "number",
          "name": "index_a"
        },
        {
          "type": "text",
          "name": "date_releve"
        },
        {
          "type": "text",
          "name": "fin_periode"
        },
        {
          "type": "number",
          "name": "consommation"
        },
        {
          "type": "number",
          "name": "moy_consommation"
        },
        {
          "type": "text",
          "name": "date_saisie"
        },
        {
          "type": "number",
          "name": "utilisateur_der_maj"
        },
        {
          "type": "text",
          "name": "date_der_maj"
        },
        {
          "type": "number",
          "name": "num_cpteur"
        },
        {
          "type": "number",
          "name": "num_tourne"
        },
        {
          "type": "number",
          "name": "id_periode"
        },
        {
          "type": "number",
          "name": "id_pl"
        },
        {
          "type": "text",
          "name": "anomalie"
        },
        {
          "type": "number",
          "name": "type_releve"
        },
        {
          "type": "number",
          "name": "nature_releve"
        },
        {
          "type": "number",
          "name": "matricule"
        },
        {
          "type": "text",
          "name": "coment"
        },
        {
          "type": "number",
          "name": "id_contrat"
        },
        {
          "type": "number",
          "name": "id_periode_prec"
        },
        {
          "type": "text",
          "name": "facture_faite"
        },
        {
          "type": "number",
          "name": "num_bordereaux"
        },
        {
          "type": "text",
          "name": "reprise"
        },
        {
          "type": "text",
          "name": "date_pf"
        }
      ],
      "outputType": "array"
    }
  },
  "index": {
    "getReleve": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "NumReleve"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "AdrPhysique"
          },
          {
            "type": "number",
            "name": "IdPl"
          },
          {
            "type": "number",
            "name": "NumTourne"
          },
          {
            "type": "number",
            "name": "IdPeriode"
          },
          {
            "type": "text",
            "name": "Codepl"
          },
          {
            "type": "text",
            "name": "NumOrdrePl"
          },
          {
            "type": "number",
            "name": "EtatPl"
          },
          {
            "type": "number",
            "name": "AccesCompteur"
          },
          {
            "type": "number",
            "name": "NumCpteur"
          },
          {
            "type": "number",
            "name": "IndexA"
          },
          {
            "type": "number",
            "name": "IndexC"
          },
          {
            "type": "text",
            "name": "DateReleve"
          },
          {
            "type": "number",
            "name": "Matricule"
          },
          {
            "type": "number",
            "name": "Consommation"
          },
          {
            "type": "number",
            "name": "MoyConsommation"
          },
          {
            "type": "text",
            "name": "Anomalie"
          },
          {
            "type": "text",
            "name": "AnomalieC"
          },
          {
            "type": "text",
            "name": "Coment"
          },
          {
            "type": "text",
            "name": "Libelle"
          },
          {
            "type": "text",
            "name": "Accescompteur"
          },
          {
            "type": "text",
            "name": "Etatpl"
          },
          {
            "type": "number",
            "name": "IdPeriodePrec"
          },
          {
            "type": "text",
            "name": "IndexR"
          },
          {
            "type": "text",
            "name": "IpmReleve"
          },
          {
            "type": "text",
            "name": "Reactive"
          },
          {
            "type": "number",
            "name": "NumBordereaux"
          },
          {
            "type": "text",
            "name": "Chkbox"
          },
          {
            "type": "text",
            "name": "Qualite"
          },
          {
            "type": "text",
            "name": "Affichable"
          },
          {
            "type": "number",
            "name": "IndexA2"
          },
          {
            "type": "text",
            "name": "DateReleve2"
          },
          {
            "type": "text",
            "name": "IndexR2"
          },
          {
            "type": "text",
            "name": "IpmReleve2"
          },
          {
            "type": "text",
            "name": "MaxIndex"
          },
          {
            "type": "text",
            "name": "CodeCpteur"
          },
          {
            "type": "number",
            "name": "IdContrat"
          },
          {
            "type": "text",
            "name": "Fmontant"
          },
          {
            "type": "text",
            "name": "NumCpteurR"
          },
          {
            "type": "text",
            "name": "CodeCpteurR"
          },
          {
            "type": "text",
            "name": "MaxIndexR"
          },
          {
            "type": "text",
            "name": "ConsR"
          },
          {
            "type": "text",
            "name": "PsAtteinte"
          },
          {
            "type": "text",
            "name": "CoeffMultIpm"
          },
          {
            "type": "number",
            "name": "PreIndexA"
          },
          {
            "type": "text",
            "name": "PreDateReleve"
          },
          {
            "type": "text",
            "name": "PeriodeDuree"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "releveView": {
      "meta": [
        {
          "type": "number",
          "name": "NumReleve"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "AdrPhysique"
        },
        {
          "type": "number",
          "name": "IdPl"
        },
        {
          "type": "number",
          "name": "NumTourne"
        },
        {
          "type": "number",
          "name": "IdPeriode"
        },
        {
          "type": "text",
          "name": "Codepl"
        },
        {
          "type": "text",
          "name": "NumOrdrePl"
        },
        {
          "type": "number",
          "name": "EtatPl"
        },
        {
          "type": "number",
          "name": "AccesCompteur"
        },
        {
          "type": "number",
          "name": "NumCpteur"
        },
        {
          "type": "number",
          "name": "IndexA"
        },
        {
          "type": "text",
          "name": "DateReleve"
        },
        {
          "type": "number",
          "name": "Matricule"
        },
        {
          "type": "number",
          "name": "Consommation"
        },
        {
          "type": "number",
          "name": "MoyConsommation"
        },
        {
          "type": "text",
          "name": "Anomalie"
        },
        {
          "type": "text",
          "name": "Coment"
        },
        {
          "type": "text",
          "name": "Libelle"
        },
        {
          "type": "text",
          "name": "Accescompteur"
        },
        {
          "type": "text",
          "name": "Etatpl"
        },
        {
          "type": "number",
          "name": "IdPeriodePrec"
        },
        {
          "type": "text",
          "name": "IndexR"
        },
        {
          "type": "text",
          "name": "IpmReleve"
        },
        {
          "type": "text",
          "name": "Reactive"
        },
        {
          "type": "number",
          "name": "NumBordereaux"
        },
        {
          "type": "text",
          "name": "Chkbox"
        },
        {
          "type": "text",
          "name": "Qualite"
        },
        {
          "type": "text",
          "name": "Affichable"
        },
        {
          "type": "number",
          "name": "IndexA2"
        },
        {
          "type": "text",
          "name": "DateReleve2"
        },
        {
          "type": "text",
          "name": "IndexR2"
        },
        {
          "type": "text",
          "name": "IpmReleve2"
        },
        {
          "type": "text",
          "name": "MaxIndex"
        },
        {
          "type": "text",
          "name": "CodeCpteur"
        },
        {
          "type": "number",
          "name": "IdContrat"
        },
        {
          "type": "text",
          "name": "Fmontant"
        },
        {
          "type": "text",
          "name": "NumCpteurR"
        },
        {
          "type": "text",
          "name": "CodeCpteurR"
        },
        {
          "type": "text",
          "name": "MaxIndexR"
        },
        {
          "type": "text",
          "name": "ConsR"
        },
        {
          "type": "text",
          "name": "PsAtteinte"
        },
        {
          "type": "text",
          "name": "CoeffMultIpm"
        }
      ],
      "outputType": "array"
    },
    "releveErreur": {
      "meta": null,
      "outputType": "array"
    },
    "suiviBordereauApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "Libcourt"
          },
          {
            "type": "boolean",
            "name": "Checked"
          },
          {
            "type": "text",
            "name": "SuivieAnomalie"
          },
          {
            "type": "text",
            "name": "DateMaj"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserMaj"
          },
          {
            "type": "object",
            "name": "Releveur",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "text",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "getAnomalieReleve": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "Code"
          },
          {
            "type": "text",
            "name": "Libelle"
          },
          {
            "type": "text",
            "name": "Qualite"
          },
          {
            "type": "text",
            "name": "Affichable"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "Code"
        },
        {
          "type": "text",
          "name": "Libelle"
        },
        {
          "type": "text",
          "name": "Qualite"
        },
        {
          "type": "text",
          "name": "Affichable"
        }
      ],
      "outputType": "array"
    },
    "selectedReleveCorrection": {
      "meta": [
        {
          "type": "number",
          "name": "NumReleve"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "AdrPhysique"
        },
        {
          "type": "number",
          "name": "IdPl"
        },
        {
          "type": "number",
          "name": "NumTourne"
        },
        {
          "type": "number",
          "name": "IdPeriode"
        },
        {
          "type": "text",
          "name": "Codepl"
        },
        {
          "type": "text",
          "name": "NumOrdrePl"
        },
        {
          "type": "number",
          "name": "EtatPl"
        },
        {
          "type": "number",
          "name": "AccesCompteur"
        },
        {
          "type": "number",
          "name": "NumCpteur"
        },
        {
          "type": "number",
          "name": "IndexA"
        },
        {
          "type": "text",
          "name": "DateReleve"
        },
        {
          "type": "number",
          "name": "Matricule"
        },
        {
          "type": "number",
          "name": "Consommation"
        },
        {
          "type": "number",
          "name": "MoyConsommation"
        },
        {
          "type": "text",
          "name": "Anomalie"
        },
        {
          "type": "text",
          "name": "Coment"
        },
        {
          "type": "text",
          "name": "Libelle"
        },
        {
          "type": "text",
          "name": "Accescompteur"
        },
        {
          "type": "text",
          "name": "Etatpl"
        },
        {
          "type": "number",
          "name": "IdPeriodePrec"
        },
        {
          "type": "text",
          "name": "IndexR"
        },
        {
          "type": "text",
          "name": "IpmReleve"
        },
        {
          "type": "text",
          "name": "Reactive"
        },
        {
          "type": "number",
          "name": "NumBordereaux"
        },
        {
          "type": "text",
          "name": "Chkbox"
        },
        {
          "type": "text",
          "name": "Qualite"
        },
        {
          "type": "text",
          "name": "Affichable"
        },
        {
          "type": "number",
          "name": "IndexA2"
        },
        {
          "type": "text",
          "name": "DateReleve2"
        },
        {
          "type": "text",
          "name": "IndexR2"
        },
        {
          "type": "text",
          "name": "IpmReleve2"
        },
        {
          "type": "text",
          "name": "MaxIndex"
        },
        {
          "type": "text",
          "name": "CodeCpteur"
        },
        {
          "type": "number",
          "name": "IdContrat"
        },
        {
          "type": "text",
          "name": "Fmontant"
        },
        {
          "type": "text",
          "name": "NumCpteurR"
        },
        {
          "type": "text",
          "name": "CodeCpteurR"
        },
        {
          "type": "text",
          "name": "MaxIndexR"
        },
        {
          "type": "text",
          "name": "ConsR"
        },
        {
          "type": "text",
          "name": "PsAtteinte"
        },
        {
          "type": "text",
          "name": "CoeffMultIpm"
        },
        {
          "type": "number",
          "name": "PreIndexA"
        },
        {
          "type": "text",
          "name": "PreDateReleve"
        },
        {
          "type": "text",
          "name": "PeriodeDuree"
        }
      ],
      "outputType": "array"
    },
    "logReleveCorrection": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdLog"
          },
          {
            "type": "number",
            "name": "NumReleve"
          },
          {
            "type": "number",
            "name": "IndexAncien"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "DatePf"
          },
          {
            "type": "text",
            "name": "Anomalie"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "historiqueReleve": {
      "meta": [
        {
          "type": "number",
          "name": "IdLog"
        },
        {
          "type": "number",
          "name": "NumReleve"
        },
        {
          "type": "number",
          "name": "IndexAncien"
        },
        {
          "type": "number",
          "name": "UserCrea"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "text",
          "name": "DatePf"
        },
        {
          "type": "text",
          "name": "Anomalie"
        }
      ],
      "outputType": "array"
    }
  },
  "releve": {
    "suiviBordereauApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "NbrCpteur"
          },
          {
            "type": "number",
            "name": "Compteurrelevee"
          },
          {
            "type": "number",
            "name": "Reste"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "UserMaj"
          },
          {
            "type": "text",
            "name": "DateMaj"
          },
          {
            "type": "number",
            "name": "Matricule"
          },
          {
            "type": "number",
            "name": "Numtsp"
          },
          {
            "type": "number",
            "name": "NumLotFac"
          },
          {
            "type": "text",
            "name": "SuivieAnomalie"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "UserSt"
          },
          {
            "type": "text",
            "name": "DateSt"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "suiviebOrdereauView": {
      "meta": [
        {
          "type": "number",
          "name": "Tournee"
        },
        {
          "type": "number",
          "name": "Periode"
        },
        {
          "type": "number",
          "name": "Bordereau"
        },
        {
          "type": "number",
          "name": "NbrCpteur"
        },
        {
          "type": "number",
          "name": "Compteurrelevee"
        },
        {
          "type": "number",
          "name": "Reste"
        },
        {
          "type": "number",
          "name": "UserCrea"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "number",
          "name": "UserMaj"
        },
        {
          "type": "text",
          "name": "DateMaj"
        },
        {
          "type": "number",
          "name": "Matricule"
        },
        {
          "type": "number",
          "name": "Numtsp"
        },
        {
          "type": "number",
          "name": "NumLotFac"
        },
        {
          "type": "text",
          "name": "SuivieAnomalie"
        },
        {
          "type": "number",
          "name": "Statut"
        },
        {
          "type": "text",
          "name": "UserSt"
        },
        {
          "type": "text",
          "name": "DateSt"
        }
      ],
      "outputType": "array"
    }
  },
  "rapport": {
    "releveView": {
      "meta": [
        {
          "type": "number",
          "name": "id_periode"
        },
        {
          "type": "text",
          "name": "code_support"
        },
        {
          "type": "number",
          "name": "num_tourne"
        },
        {
          "type": "number",
          "name": "rang_branch"
        },
        {
          "type": "number",
          "name": "num_ordre_pl"
        },
        {
          "type": "text",
          "name": "adr_physique"
        },
        {
          "type": "text",
          "name": "nom"
        },
        {
          "type": "text",
          "name": "accesscnt"
        },
        {
          "type": "number",
          "name": "num_releve"
        },
        {
          "type": "text",
          "name": "code_cpteur"
        },
        {
          "type": "text",
          "name": "nom_cellule"
        },
        {
          "type": "number",
          "name": "index_a"
        },
        {
          "type": "datetime",
          "name": "date_releve"
        },
        {
          "type": "text",
          "name": "coment"
        },
        {
          "type": "text",
          "name": "qualite"
        },
        {
          "type": "text",
          "name": "libelle"
        },
        {
          "type": "text",
          "name": "anom_code"
        },
        {
          "type": "text",
          "name": "nom_periode"
        },
        {
          "type": "text",
          "name": "nom_lotfac"
        },
        {
          "type": "text",
          "name": "nom_employe"
        },
        {
          "type": "number",
          "name": "consommation"
        },
        {
          "type": "number",
          "name": "moy_consommation"
        },
        {
          "type": "text",
          "name": "releve_type"
        },
        {
          "type": "number",
          "name": "index_p"
        },
        {
          "type": "number",
          "name": "num_bordereaux"
        },
        {
          "type": "number",
          "name": "num_lot_fac"
        },
        {
          "type": "number",
          "name": "matricule"
        },
        {
          "type": "datetime",
          "name": "date_saisie"
        }
      ],
      "outputType": "array"
    },
    "sql": {
      "meta": null,
      "outputType": "text"
    }
  }
});
