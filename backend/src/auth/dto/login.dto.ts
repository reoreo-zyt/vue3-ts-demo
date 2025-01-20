import { ApiProperty } from '@nestjs/swagger';
import { useProperty } from '../../hooks/useProperty';

const { getAuthUsernameProperty, getAuthPasswordProperty } = useProperty();

export class LoginDto {
  @ApiProperty({ ...getAuthUsernameProperty() })
  username: string;
  @ApiProperty({ ...getAuthPasswordProperty() })
  password: string;
  captchaCode: string;
}
