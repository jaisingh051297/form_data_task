import { Router } from "express";
import { FormController } from "../controller/formController";

const router = Router();

router.post('/form',FormController.createForm);

router.post('/fill_data',FormController.fillFormData );

router.get('/fill_data',FormController.getFormData);

export default router;
