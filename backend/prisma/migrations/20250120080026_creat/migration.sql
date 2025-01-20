-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(64) NOT NULL,
    `nickname` VARCHAR(64) NULL,
    `gender` TINYINT NULL,
    `password` VARCHAR(100) NOT NULL,
    `dept_id` INTEGER NULL,
    `avatar` VARCHAR(255) NULL DEFAULT '',
    `mobile` VARCHAR(20) NULL,
    `status` TINYINT NULL,
    `email` VARCHAR(128) NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` BIGINT NULL,
    `update_time` DATETIME(3) NOT NULL,
    `update_by` BIGINT NULL,
    `is_deleted` TINYINT NOT NULL DEFAULT 1,
    `openid` VARCHAR(28) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
