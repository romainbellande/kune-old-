import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, DNSHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private dns: DNSHealthIndicator) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([async () => this.dns.pingCheck('google', 'https://google.com')]);
  }
}
