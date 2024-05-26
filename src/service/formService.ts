import { AppDataSource } from "../db/db_config";
import { Form } from "../entity/Form";
import { FormData } from "../entity/FormData";

export class FormService {
    private formRepository = AppDataSource.getRepository(Form);
    private formDataRepository = AppDataSource.getRepository(FormData);

    async createForm(formData: Partial<Form>): Promise<Form> {
        const form = this.formRepository.create(formData);
        return this.formRepository.save(form);
    }

    async findFormByTitle(title: string): Promise<Form | undefined> {
        return this.findFormByTitle(title );
    }

    async fillFormData(formData: Partial<FormData>): Promise<FormData> {
        const data = this.formDataRepository.create(formData);
        return this.formDataRepository.save(data);
    }

    async getFormDataByTitle(title: string): Promise<FormData[]> {
        const form = await this.findFormByTitle(title);
        if (!form) {
            throw new Error("Form not found");
        }
        return this.formDataRepository.find({ where: { form } });
    }
}
