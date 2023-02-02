// import { Injectable } from '@nestjs/common';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';

// @Injectable()
// export class BeneficiaireService {
//   delete(id: string) {
//     throw new Error('Method not implemented.');
//   }
//   create(createBeneficiaireDto: CreateBeneficiaireDto) {
//     return 'This action adds a new beneficiaire';
//   }

//   findAll() {
//     return `This action returns all beneficiaire`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} beneficiaire`;
//   }

//   update(id: number, updateBeneficiaireDto: UpdateBeneficiaireDto) {
//     return `This action updates a #${id} beneficiaire`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} beneficiaire`;
//   }
// }

// import { Injectable } from '@nestjs/common';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';

// @Injectable()
// export class BeneficiaireService {
//   private beneficiaires: any[] = [];

//   create(createBeneficiaireDto: CreateBeneficiaireDto) {
//     const newbeneficiaire = {
//       id: this.beneficiaires.length + 1,
//       ...createBeneficiaireDto,
//     };
//     this.beneficiaires.push(newbeneficiaire);
//     return newbeneficiaire;
//   }

//   findAll() {
//     return this.beneficiaires;
//   }

//   findOne(id: number) {
//     return this.beneficiaires.find((beneficiaire) => beneficiaire.id === id);
//   }

//   update(id: number, updateBeneficiaireDto: UpdateBeneficiaireDto) {
//     const beneficiaireIndex = this.beneficiaires.findIndex(
//       (beneficiaire) => beneficiaire.id === id,
//     );
//     if (beneficiaireIndex === -1) {
//       return null;
//     }
//     this.beneficiaires[beneficiaireIndex] = {
//       ...this.beneficiaires[beneficiaireIndex],
//       ...updateBeneficiaireDto,
//     };
//     return this.beneficiaires[beneficiaireIndex];
//   }

//   delete(id: number) {
//     const beneficiaireIndex = this.beneficiaires.findIndex(
//       (beneficiaire) => beneficiaire.id === id,
//     );
//     if (beneficiaireIndex === -1) {
//       return null;
//     }
//     const deletedbeneficiaire = this.beneficiaires[beneficiaireIndex];
//     this.beneficiaires = this.beneficiaires.filter(
//       (beneficiaire) => beneficiaire.id !== id,
//     );
//     return deletedbeneficiaire;
//   }
// }

// import { Injectable } from '@nestjs/common';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';

// interface Beneficiaire {
//   id: number;
//   nom: string;
//   prenom: string;
//   email: string;
//   password: string;
// }

// @Injectable()
// export class BeneficiaireService {
//   remove(id: string) {
//     throw new Error('Method not implemented.');
//   }
//   private beneficiaires: Beneficiaire[] = [];

//   create(createBeneficiaireDto: CreateBeneficiaireDto) {
//     // Create a new beneficiary with the provided DTO and assign an id
//     const newbeneficiaire: Beneficiaire = {
//       id: this.beneficiaires.length + 1,
//       ...createBeneficiaireDto,
//       nom: '',
//       prenom: '',
//       email: '',
//     };

//     // Add the new beneficiary to the array
//     this.beneficiaires.push(newbeneficiaire);
//     return newbeneficiaire;
//   }

//   findAll() {
//     return this.beneficiaires;
//   }

//   findOne(id: number) {
//     return this.beneficiaires.find((beneficiaire) => beneficiaire.id === id);
//   }

//   update(id: number, updateBeneficiaireDto: UpdateBeneficiaireDto) {
//     // Find the index of the beneficiary to update
//     const beneficiaireIndex = this.beneficiaires.findIndex(
//       (beneficiaire) => beneficiaire.id === id,
//     );

//     // If the beneficiary does not exist, return null
//     if (beneficiaireIndex === -1) {
//       return null;
//     }

//     // Update the beneficiary with the provided DTO
//     this.beneficiaires[beneficiaireIndex] = {
//       ...this.beneficiaires[beneficiaireIndex],
//       ...updateBeneficiaireDto,
//     };

//     // Return the updated beneficiary
//     return this.beneficiaires[beneficiaireIndex];
//   }

//   delete(id: number) {
//     // Find the index of the beneficiary to delete
//     const beneficiaireIndex = this.beneficiaires.findIndex(
//       (beneficiaire) => beneficiaire.id === id,
//     );

//     // If the beneficiary does not exist, return null
//     if (beneficiaireIndex === -1) {
//       return null;
//     }

//     // Store a reference to the deleted beneficiary
//     const deletedbeneficiaire = this.beneficiaires[beneficiaireIndex];

//     // Remove the beneficiary from the array
//     this.beneficiaires = this.beneficiaires.filter(
//       (beneficiaire) => beneficiaire.id !== id,
//     );

//     // Return the deleted beneficiary
//     return deletedbeneficiaire;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
import { Beneficiaire } from './entities/beneficiaire.entity';

@Injectable()
export class BeneficiaireService {
  beneficiaireRepository: any;
  constructor(
    @InjectRepository(Beneficiaire)
    private readonly beneficRepository: Repository<Beneficiaire>,
  ) {}

  async findAll(): Promise<Beneficiaire[]> {
    return await this.beneficiaireRepository.find();
  }

  async findOne(id: string): Promise<Beneficiaire> {
    return await this.beneficiaireRepository.findOne(id);
  }

  async create(
    createBeneficiaireDto: CreateBeneficiaireDto,
  ): Promise<Beneficiaire> {
    const beneficiaire = new Beneficiaire();
    beneficiaire.nom = createBeneficiaireDto.nom;
    beneficiaire.prenom = createBeneficiaireDto.prenom;
    beneficiaire.email = createBeneficiaireDto.email;
    beneficiaire.password = createBeneficiaireDto.password;
    return await this.beneficiaireRepository.save(beneficiaire);
  }

  async update(
    id: string,
    updateBeneficiaireDto: UpdateBeneficiaireDto,
  ): Promise<Beneficiaire> {
    const beneficiaire = await this.beneficiaireRepository.findOne(id);
    if (updateBeneficiaireDto.nom) {
      beneficiaire.nom = updateBeneficiaireDto.nom;
    }
    if (updateBeneficiaireDto.prenom) {
      beneficiaire.prenom = updateBeneficiaireDto.prenom;
    }
    if (updateBeneficiaireDto.email) {
      beneficiaire.email = updateBeneficiaireDto.email;
    }
    if (updateBeneficiaireDto.password) {
      beneficiaire.password = updateBeneficiaireDto.password;
    }
    return await this.beneficiaireRepository.save(beneficiaire);
  }

  async delete(id: string): Promise<void> {
    await this.beneficiaireRepository.delete(id);
  }
}
