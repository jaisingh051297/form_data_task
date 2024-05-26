import { Request, Response } from "express";
import { FormService } from "../service/formService";
import { v4 as uuidv4 } from "uuid";

const formService = new FormService();

export class FormController {
    static async createForm(req: Request, res: Response): Promise<void> {
        const { uniqueId, title, name, email, phonenumber, isGraduate } = req.body;
        try {
            const form = await formService.createForm({
                uniqueId: uniqueId || uuidv4(),
                title,
                name,
                email,
                phonenumber,
                isGraduate
            });
            res.status(201).send(form);
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }

    static async fillFormData(req: Request, res: Response): Promise<void> {
        const { uniqueId, name, email, phonenumber, isGraduate } = req.body;
        const { form_title } = req.query;
        try {
            const form = await formService.findFormByTitle(form_title as string);
            if (!form) {
                res.status(404).send({ message: "Form not found" });
                return;
            }

            const formData = await formService.fillFormData({
                uniqueId,
                form,
                name,
                email,
                phonenumber,
                isGraduate
            });
            res.status(201).send(formData);
        } catch (error) {
            res.status(400).send({ error: error});
        }
    }

    static async getFormData(req: Request, res: Response): Promise<void> {
        const { form_title } = req.query;
        try {
            const data = await formService.getFormDataByTitle(form_title as string);
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send({ error: error});
        }
    }
}
