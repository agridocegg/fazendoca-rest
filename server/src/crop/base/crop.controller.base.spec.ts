import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CropController } from "../crop.controller";
import { CropService } from "../crop.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  isPlowed: "true",
  nextGrowth: new Date(),
  stage: 42,
  updatedAt: new Date(),
  wateredAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  isPlowed: "true",
  nextGrowth: new Date(),
  stage: 42,
  updatedAt: new Date(),
  wateredAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    isPlowed: "true",
    nextGrowth: new Date(),
    stage: 42,
    updatedAt: new Date(),
    wateredAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  isPlowed: "true",
  nextGrowth: new Date(),
  stage: 42,
  updatedAt: new Date(),
  wateredAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Crop", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CropService,
          useValue: service,
        },
      ],
      controllers: [CropController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /crops", async () => {
    await request(app.getHttpServer())
      .post("/crops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        nextGrowth: CREATE_RESULT.nextGrowth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        wateredAt: CREATE_RESULT.wateredAt.toISOString(),
      });
  });

  test("GET /crops", async () => {
    await request(app.getHttpServer())
      .get("/crops")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          nextGrowth: FIND_MANY_RESULT[0].nextGrowth.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          wateredAt: FIND_MANY_RESULT[0].wateredAt.toISOString(),
        },
      ]);
  });

  test("GET /crops/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crops"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /crops/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crops"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        nextGrowth: FIND_ONE_RESULT.nextGrowth.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        wateredAt: FIND_ONE_RESULT.wateredAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
