/* eslint-disable @typescript-eslint/no-unused-vars */
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Put,
// } from '@nestjs/common';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';

// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   HttpException,
//   HttpStatus,
//   Param,
//   Post,
//   Put,
//   UsePipes,
//   ValidationPipe,
// } from '@nestjs/common';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @Controller('beneficiaire')
// export class BeneficiaireController {
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   @Post()
//   create(@Body() createBeneficiaireDto: CreateBeneficiaireDto) {
//     return this.beneficiaireService.create(createBeneficiaireDto);
//   }

//   @Get()
//   findAll() {
//     return this.beneficiaireService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.beneficiaireService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ) {
//     return this.beneficiaireService.update(+id, updateBeneficiaireDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.beneficiaireService.remove(+id);
//   }
// }

// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';

// @Controller('beneficiaire')
// export class BeneficiaireController {
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   @Post()
//    create(@Body() createBeneficiaireDto: CreateBeneficiaireDto) {
//     return  this.beneficiaireService.create(createBeneficiaireDto);
//   }

//   @Get()
//    findAll() {
//     return  this.beneficiaireService.findAll();
//   }

//   @Get(':id')
//    findOne(@Param('id') id: string) {
//     return  this.beneficiaireService.findOne(+id);
//   }

//   @Patch(':id')
//    update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ) {
//     return  this.beneficiaireService.update(+id, updateBeneficiaireDto);
//   }

//   @Delete(':id')
//    remove(@Param('id') id: string) {
//     return  this.beneficiaireService.delete(+id);
//   }
// }
// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @Controller('beneficiaires')
// export class BeneficiaireController {
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   // Ce controlleur gère la création d'un nouveau bénéficiaire
//   @Post()
//    create(
//     @Body() createBeneficiaireDto: CreateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       return  this.beneficiaireService.create(createBeneficiaireDto);
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//   // Ce controlleur gère la récupération de tous les bénéficiaires
//   @Get()
//    findAll(): Promise<Beneficiaire[]> {
//     try {
//       return  this.beneficiaireService.findAll();
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//   // Ce controlleur gère la récupération d'un bénéficiaire spécifique par son identifiant
//   @Get(':id')
//    findOne(@Param('id') id: number): Promise<Beneficiaire> {
//     try {
//       return  this.beneficiaireService.findOne(id);
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//   // Ce controlleur gère la mise à jour d'un bénéficiaire spécifique
//   @Put(':id')
//    update(
//     @Param('id') id: number,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       return  this.beneficiaireService.update(id, updateBeneficiaireDto);
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//   // Ce controlleur gère la suppression d'un bénéficiaire spécifique
//   @Delete(':id')
//    delete(@Param('id') id: number): Promise<void> {
//     try {
//       return  this.beneficiaireService.delete(id);
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }
// }

// import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import {
//   ApiBearerAuth,
//   ApiCreatedResponse,
//   ApiOkResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @ApiTags('beneficiaires')
// @ApiBearerAuth()
// @Controller('beneficiaires')
// export class BeneficiaireController {
//   beneficiaires: Beneficiaire[] | PromiseLike<Beneficiaire[]>;
//   beneficiaire: Beneficiaire | PromiseLike<Beneficiaire>;
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   @UseGuards(AuthGuard('jwt'))
//   @Post()
//   @ApiCreatedResponse({ type: Beneficiaire })
//    create(
//     @Body() createBeneficiaireDto: CreateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour créer un nouveau bénéficiaire en utilisant les données de création fournies.
//       const beneficiaire =  this.beneficiaireService.create(
//         createBeneficiaireDto,
//       );

//       // Si le bénéficiaire est créé avec succès, retourner le bénéficiaire créé.
//       return this.beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    findOne(@Param('id') id: string): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour trouver un bénéficiaire en fonction de l'ID fourni.
//       const beneficiaire =  this.beneficiaireService.findOne(+id);

//       // Si le bénéficiaire est trouvé, retourner le bénéficiaire trouvé.
//       return this.beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Post(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour mettre à jour un bénéficiaire en utilisant les données de mise à jour fournies.
//       const beneficiaire =  this.beneficiaireService.update(
//         +id,
//         updateBeneficiaireDto,
//       );
//       // Si le bénéficiaire est mis à jour avec succès, retourner le bénéficiaire mis à jour.
//       return this.beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get()
//   @ApiOkResponse({ type: [Beneficiaire] })
//    findAll(): Promise<Beneficiaire[]> {
//     try {
//       // Appeler le service pour trouver tous les bénéficiaires.
//       const beneficiaires =  this.beneficiaireService.findAll();
//       // Si les bénéficiaires sont trouvés, retourner les bénéficiaires trouvés.
//       return this.beneficiaires;
//     } catch (error) {
//       // En cas d'erreur, lever une erreur pour que le gestionnaire d'erreurs gère l'erreur.
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Post(':id/delete')
//   @ApiOkResponse({ type: Beneficiaire })
//    delete(@Param('id') id: string): Promise<void> {
//     try {
//       // Appeler le service pour supprimer un bénéficiaire en fonction de l'ID fourni.
//        this.beneficiaireService.delete(+id);
//     } catch (error) {
//       // En cas d'erreur, lever une erreur pour que le gestionnaire d'erreurs gère l'erreur.
//       throw error;
//     }
//   }
// }

// import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import {
//   ApiBearerAuth,
//   ApiCreatedResponse,
//   ApiOkResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @ApiTags('beneficiaires')
// @ApiBearerAuth()
// @Controller('beneficiaires')
// export class BeneficiaireController {
//   beneficiaire: Beneficiaire | PromiseLike<Beneficiaire>;
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   @UseGuards(AuthGuard('jwt'))
//   @Post()
//   @ApiCreatedResponse({ type: Beneficiaire })
//    create(
//     @Body() createBeneficiaireDto: CreateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour créer un nouveau bénéficiaire en utilisant les données de création fournies.
//       const beneficiaire =  this.beneficiaireService.create(
//         createBeneficiaireDto,
//       );

//       // Si le bénéficiaire est créé avec succès, retourner le bénéficiaire créé.
//       return this.beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    findOne(@Param('id') id: string): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour trouver un bénéficiaire en fonction de l'ID fourni.
//       const beneficiaire =  this.beneficiaireService.findOne(+id);

//       // Si le bénéficiaire est trouvé, retourner le bénéficiaire trouvé.
//       return this.beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Post(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour mettre à jour un bénéficiaire en utilisant les données de mise à jour fournies et l'ID fourni.
//       const beneficiaire =  this.beneficiaireService.update(
//         +id,
//         updateBeneficiaireDto,
//       );

//       // Si le bénéficiaire est mis à jour avec succès, retourner le bénéficiaire mis à jour.
//       return beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Put,
//   Delete,
//   UseGuards,
// } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import {
//   ApiBearerAuth,
//   ApiCreatedResponse,
//   ApiOkResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @ApiTags('beneficiaires')
// @ApiBearerAuth()
// @Controller('beneficiaires')
// export class BeneficiaireController {
//   constructor(private readonly beneficiaireService: BeneficiaireService) {}

//   @UseGuards(AuthGuard('jwt'))
//   @Post()
//   @ApiCreatedResponse({ type: Beneficiaire })
//    create(
//     @Body() createBeneficiaireDto: CreateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour créer un nouveau bénéficiaire en utilisant les données de création fournies.
//       const beneficiaire =  this.beneficiaireService.create(
//         createBeneficiaireDto,
//       );

//       // Si le bénéficiaire est créé avec succès, retourner le bénéficiaire créé.
//       return beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    findOne(@Param('id') id: string): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour trouver un bénéficiaire en fonction de l'ID fourni.
//       const beneficiaire =  this.beneficiaireService.findOne(+id);

//       // Si le bénéficiaire est trouvé, retourner le bénéficiaire trouvé.
//       return beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Put(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour mettre à jour un bénéficiaire en utilisant les données de mise à jour fournies.
//       const beneficiaire =  this.beneficiaireService.update(
//         +id,
//         updateBeneficiaireDto,
//       ); // Si le bénéficiaire est mis à jour avec succès, retourner le bénéficiaire mis à jour.
//       return beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Delete(':id')
//   @ApiOkResponse({ type: Beneficiaire })
//    delete(@Param('id') id: string): Promise<Beneficiaire> {
//     try {
//       // Appeler le service pour supprimer un bénéficiaire en fonction de l'ID fourni.
//       const beneficiaire =  this.beneficiaireService.delete(+id);

//       // Si le bénéficiaire est supprimé avec succès, retourner le bénéficiaire supprimé.
//       return beneficiaire;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// import { Controller, Get, Post, Param, Body, UseGuards, Delete, Patch, HttpException, HttpStatus } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { Reservation } from 'src/reservation/entities/reservation.entity';
// import { ReservationService } from 'src/reservation/reservation.service';
// import { BeneficiaireService } from './beneficiaire.service';
// import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
// import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @Controller('utilisateur')
// export class UtilisateurController {
//   beneficiaireService: any;
//   constructor(
//     private readonly utilisateurService: BeneficiaireService,
//     private readonly reservationService: ReservationService,
//   ) {}

//   //--------------------------------------------USER REGISTRATION------------------------------//

//   @Post('/inscription')
//    inscription(@Body() createBeneficiaireDto: CreateBeneficiaireDto) {
//     try {
//       // Attempt to create a new user
//       return  this.beneficiaireService.inscription(createBeneficiaireDto);
//     } catch (error) {
//       // If there is an error, throw a new HTTPException with the error message and status code
//       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
//     }
//   }

//   //--------------------------------------------USER REQUESTS------------------------------//

//   @UseGuards(AuthGuard())
//   @Get()
//    findOneBeneficiaire(@GetUser() beneficiaire: Beneficiaire): Promise<Beneficiaire> {
//     try {
//       // Attempt to retrieve the current user
//       return  this.beneficiaireService.findOne(beneficiaire.id);
//     } catch (error) {
//       // If there is an error, throw a new HTTPException with the error message and status code
//       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
//     }
//   }

//   @UseGuards(AuthGuard())
//   @Patch()
//    updateBeneficiaire(
//     @GetUser() beneficiaire: Beneficiaire,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     try {
//       // Attempt to update the current user
//       return  this.beneficiaireService.update(beneficiaire.id, updateBeneficiaireDto);
//     } catch (error) {
//       // If there is an error, throw a new HTTPException with the error message and status code
//       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
//     }
//   }

//   @UseGuards(AuthGuard())
//   @Delete()
//    removeUtilisateur(@GetUser() utilisateur: Beneficiaire) {
//     try {
//       // Attempt to delete the current user
//       return  this.utilisateurService.remove(utilisateur.id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// //--------------------------------------------RESERVATION REQUESTS------------------------------//

// @UseGuards(AuthGuard())
// @Post('/reservation')
//  createReservation(@GetUser() utilisateur: Utilisateur, @Body() reservation: Reservation): Promise<Reservation> {
// try {
// // Attempt to create a new reservation
// return  this.reservationService.create(beneficiaire.id, reservation);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Get('/reservation')
//  findAllReservation(@GetUser() beneficiaire: Beneficiaire): Promise<Reservation[]> {
// try {
// // Attempt to retrieve all reservations made by the current user
// return  this.reservationService.findAllByUserId(beneficiaire.id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Get('/reservation/:id')
//  findOneReservation(@GetUser() beneficiaire: Beneficiaire, @Param('id') id: number): Promise<Reservation> {
// try {
// // Attempt to retrieve a specific reservation made by the current user
// return  this.reservationService.findOneByUserId(beneficiaire.id, id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Patch('/reservation/:id')
//  updateReservation(
// @GetUser() utilisateur: Beneficiaire,
// @Param('id') id: number,
// @Body() reservation: Reservation,
// ): Promise<Reservation> {
// try {
// // Attempt to update a specific reservation made by the current user
// return  this.reservationService.update(beneficiaire.id, id, reservation);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Delete('/reservation/:id')
//  removeReservation(@GetUser() beneficiaire: Beneficiaire, @Param('id') id: number) {
// try {
// // Attempt to delete a specific reservation made by the current user
// return  beneficiaire.id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// //--------------------------------------------RESERVATION REQUESTS------------------------------//

// @UseGuards(AuthGuard())
// @Get('/reservation')
//  getUserReservations(@GetUser() beneficiaire: Beneficiaire): Promise<Reservation[]> {
// try {
// // Attempt to retrieve the current user's reservations
// return  this.reservationService.findByUserId(beneficiaire.id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Post('/reservation')
//  createReservation(
// @GetUser() beneficiaire: Beneficiaire,
// @Body() reservation: Reservation,
// ): Promise<Reservation> {
// try {
// // Attempt to create a new reservation for the current user
// reservation.beneficiaireId = beneficiaire.id;
// return  this.reservationService.create(reservation);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Patch('/reservation/:id')
//  updateReservation(
// @Param('id') id: number,
// @Body() reservation: Reservation,
// ): Promise<Reservation> {
// try {
// // Attempt to update the specified reservation
// return  this.reservationService.update(id, reservation);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }

// @UseGuards(AuthGuard())
// @Delete('/reservation/:id')
//  removeReservation(@Param('id') id: number) {
// try {
// // Attempt to delete the specified reservation
// return  this.reservationService.remove(id);
// } catch (error) {
// // If there is an error, throw a new HTTPException with the error message and status code
// throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
// }
// }
// }

// function GetUser() {
//   throw new Error('Function not implemented.');
// }

// @Controller('beneficiaire')
// export class BeneficiaireController {
//   beneficiaireService: any;
//   constructor(private readonly beneficService: BeneficiaireService) {}

//   @Get()
//   async findAll(): Promise<Beneficiaire[]> {
//     return this.beneficiaireService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Beneficiaire> {
//     return this.beneficiaireService.findOne(id);
//   }

//   @Post()
//   @UsePipes(new ValidationPipe())
//   async create(
//     @Body() createBeneficiaireDto: CreateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     return this.beneficiaireService.create(createBeneficiaireDto);
//   }

//   @Put(':id')
//   @UsePipes(new ValidationPipe())
//   async update(
//     @Param('id') id: string,
//     @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
//   ): Promise<Beneficiaire> {
//     return this.beneficiaireService.update(id, updateBeneficiaireDto);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<void> {
//     return this.beneficiaireService.delete(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BeneficiaireService } from './beneficiaire.service';
import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
import { Beneficiaire } from './entities/beneficiaire.entity';

@Controller('beneficiaires')
export class BeneficiaireController {
  constructor(private readonly beneficiaireService: BeneficiaireService) {}

  @Post()
  async create(@Body() createBeneficiaireDto: CreateBeneficiaireDto) {
    try {
      return await this.beneficiaireService.create(createBeneficiaireDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
  ) {
    try {
      return await this.beneficiaireService.update(id, updateBeneficiaireDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.beneficiaireService.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<Beneficiaire[]> {
    try {
      return await this.beneficiaireService.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Beneficiaire> {
    try {
      return await this.beneficiaireService.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
