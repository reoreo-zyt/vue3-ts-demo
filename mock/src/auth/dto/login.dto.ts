import { ApiProperty } from '@nestjs/swagger';
import { useProperty } from '../../hooks/useProperty';

const { getAuthPhoneProperty, getAuthPasswordProperty } = useProperty();

export class LoginDto {
  @ApiProperty({ ...getAuthPhoneProperty() })
  phone: string;
  @ApiProperty({ ...getAuthPasswordProperty() })
  password: string;
}
