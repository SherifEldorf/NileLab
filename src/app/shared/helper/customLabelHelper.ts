// import { CustomLabelService } from '../../modules/customLabel/services/customLabel.service';
import { SharedValueService } from '../../shared/service/shared-value-service';
import { CustomLabelDTO } from '../model/CustomLabelDTO';
import { convertToCamelCase } from './helper';
import { CustomLabelService } from '../service/customLabel.service';

export async function getCustomLabel(
  customLabelService: CustomLabelService,
  sharedValueService: SharedValueService
) {
  const languageId = sharedValueService.langauageId;
  if (languageId != null && languageId != undefined) {
    customLabelService
      .selectLabelLanguage(languageId)
      .subscribe((response: any) => {
        const customLabelDTO = new CustomLabelDTO();
        response.forEach((element: { name: string; value: any }) => {
          customLabelDTO[convertToCamelCase(element.name)] = element.value;
        });
        sharedValueService.setCustomLabelDTO(customLabelDTO);
      });
  }
}
